import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { supabase } from "./supabase";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

// Função para realizar operações do Supabase com tratamento de erros
export async function supabaseRequest<T>(
  operation: () => Promise<{ data: T | null; error: any }>
): Promise<T | null> {
  try {
    const { data, error } = await operation();
    
    if (error) {
      console.error("Erro na operação do Supabase:", error);
      throw new Error(error.message || "Erro na operação do Supabase");
    }
    
    return data;
  } catch (error) {
    console.error("Erro ao executar operação do Supabase:", error);
    throw error;
  }
}

// Funções de consulta específicas para o Supabase
export const supabaseQueries = {
  // Função para buscar dados de uma tabela
  getFromTable: <T>(tableName: string, options?: { 
    columns?: string; 
    filter?: { column: string; value: any }[];
    singleRecord?: boolean;
  }) => async (): Promise<T | T[] | null> => {
    let query = supabase.from(tableName).select(options?.columns || '*');
    
    // Aplicar filtros se existirem
    if (options?.filter && options.filter.length > 0) {
      options.filter.forEach(f => {
        query = query.eq(f.column, f.value);
      });
    }
    
    // Retornar um único registro ou uma lista
    if (options?.singleRecord) {
      const { data, error } = await query.single();
      if (error) {
        if (error.code === 'PGRST116') { // Registro não encontrado
          return null;
        }
        throw new Error(error.message);
      }
      return data as T;
    } else {
      const { data, error } = await query;
      if (error) throw new Error(error.message);
      return data as T[];
    }
  },
  
  // Função para inserir dados em uma tabela
  insertIntoTable: <T>(tableName: string) => 
    async (record: any): Promise<T | null> => {
      const { data, error } = await supabase
        .from(tableName)
        .insert(record)
        .select()
        .single();
      
      if (error) throw new Error(error.message);
      return data as T;
    },
  
  // Função para atualizar dados em uma tabela
  updateInTable: <T>(tableName: string, id: number) => 
    async (updates: any): Promise<T | null> => {
      const { data, error } = await supabase
        .from(tableName)
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw new Error(error.message);
      return data as T;
    },
  
  // Função para excluir dados de uma tabela
  deleteFromTable: (tableName: string, id: number) => 
    async (): Promise<void> => {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);
      
      if (error) throw new Error(error.message);
    }
};

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
