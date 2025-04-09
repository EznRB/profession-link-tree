import { createClient } from '@supabase/supabase-js';

// Usar as credenciais do ambiente - ou valores de fallback para desenvolvimento
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://yvaozyoyvuszadimbemu.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2YW96eW95dnVzemFkaW1iZW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMjk2NTksImV4cCI6MjA1ODYwNTY1OX0.THhFI4Ty3lYMH2uiSPXclpJync5odPSFFRgx25oaR8M';

// Criar cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Função de ajuda para lidar com erros de resposta
export async function handleSupabaseResponse<T>(
  promise: Promise<{ data: T | null; error: any }>
): Promise<T> {
  const { data, error } = await promise;
  
  if (error) {
    console.error('Erro na operação Supabase:', error);
    throw new Error(error.message || 'Erro ao comunicar com o Supabase');
  }
  
  if (data === null) {
    throw new Error('Nenhum dado encontrado');
  }
  
  return data;
}