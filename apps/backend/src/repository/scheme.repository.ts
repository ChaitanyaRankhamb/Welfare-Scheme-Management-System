import { Scheme } from '../entity/schemes/scheme.entity';
import type { SchemeEligibilityCriteria } from '../entity/schemes/scheme.entity';

export interface CreateSchemeData {
  title: string;
  description: string;
  ministry: string;
  category: string;
  tags: string[];
  state: string;
  eligibilityCriteria: SchemeEligibilityCriteria;
  benefits: string[];
  documentsRequired: string[];
  applicationUrl?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISchemeRepository {
  createScheme(schemeData: CreateSchemeData): Promise<Scheme>;
  findSchemeById(id: string): Promise<Scheme | null>;
  findAllSchemes(filters?: Record<string, unknown>): Promise<Scheme[]>;
  searchSchemes(query: string): Promise<Scheme[]>;
  updateScheme(id: string, scheme: Scheme): Promise<Scheme | null>;
  deleteScheme(id: string): Promise<Scheme | null>;
}
