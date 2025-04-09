import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabaseQueries } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { insertUserSchema } from '@shared/schema';

// Schema estendido para validação no client
const createUserSchema = insertUserSchema.extend({
  passwordConfirm: z.string(),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "As senhas devem ser iguais",
  path: ["passwordConfirm"],
});

type CreateUserFormValues = z.infer<typeof createUserSchema>;

export default function UserManagement() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  // Consulta para buscar usuários
  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: supabaseQueries.getFromTable('users'),
  });

  // Mutação para criar usuário
  const createUserMutation = useMutation({
    mutationFn: supabaseQueries.insertIntoTable('users'),
    onSuccess: () => {
      toast({
        title: 'Usuário criado com sucesso',
        variant: 'default',
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error: Error) => {
      toast({
        title: 'Erro ao criar usuário',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  // Formulário para criar usuário
  const form = useForm<CreateUserFormValues>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      username: '',
      password: '',
      passwordConfirm: '',
    },
  });

  function onSubmit(data: CreateUserFormValues) {
    // Remover o campo passwordConfirm para enviar apenas os campos válidos para o backend
    const { passwordConfirm, ...userToCreate } = data;
    createUserMutation.mutate(userToCreate);
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Erro ao carregar usuários: {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulário para criar usuário */}
        <Card>
          <CardHeader>
            <CardTitle>Criar Novo Usuário</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome de Usuário</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o nome de usuário" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Digite a senha" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="passwordConfirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar Senha</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Confirme a senha" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={createUserMutation.isPending}>
                  {createUserMutation.isPending ? 'Criando...' : 'Criar Usuário'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Lista de usuários */}
        <Card>
          <CardHeader>
            <CardTitle>Usuários Cadastrados</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div>Carregando usuários...</div>
            ) : (
              <div className="space-y-2">
                {Array.isArray(users) && users.length > 0 ? (
                  users.map((user: any) => (
                    <div 
                      key={user.id} 
                      className="p-3 border rounded-md flex justify-between items-center"
                      onClick={() => setSelectedUserId(user.id)}
                    >
                      <div>
                        <p className="font-medium">{user.username}</p>
                        <p className="text-sm text-gray-500">ID: {user.id}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>Nenhum usuário encontrado</div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}