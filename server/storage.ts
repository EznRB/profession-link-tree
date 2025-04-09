import { users, type User, type InsertUser } from "@shared/schema";
import { supabase } from "./supabase";

// Interface de armazenamento com métodos CRUD
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

// Implementação de armazenamento com Supabase
export class SupabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Erro ao buscar usuário por ID:', error);
      return undefined;
    }
    
    return data as User;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .single();
    
    if (error) {
      // Se o erro for de "não encontrado", retorna undefined sem logar o erro
      if (error.code === 'PGRST116') {
        return undefined;
      }
      console.error('Erro ao buscar usuário por username:', error);
      return undefined;
    }
    
    return data as User;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const { data, error } = await supabase
      .from('users')
      .insert(insertUser)
      .select()
      .single();
    
    if (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
    
    return data as User;
  }
}

// Implementação de armazenamento em memória (para referência ou fallback)
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

// Exporta a implementação de armazenamento Supabase
export const storage = new SupabaseStorage();
