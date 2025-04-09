import { createClient } from '@supabase/supabase-js';

// Obter as credenciais do ambiente
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('As variáveis de ambiente SUPABASE_URL e SUPABASE_ANON_KEY devem ser definidas.');
}

// Criar cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);