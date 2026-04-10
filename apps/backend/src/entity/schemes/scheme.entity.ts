import type { SchemeId } from './schemeId';

type IncomeCriteria = {  // annual income
  max?: number;
  min?: number;
};

type AgeCriteria = {
  min?: number;
  max?: number;
};

type LocationCriteria = {
  country?: string;
  states?: string[];
  districts?: string[];
  ruralOnly?: boolean;
  urbanOnly?: boolean;
};

type SocialCriteria = {
  religion?: string[];
  caste?: string[];
  minority?: boolean;
  disability?: boolean;
};

type EmploymentCriteria = {
  occupations?: string[];
  employmentStatus?: 'employed' | 'unemployed' | 'student' | 'farmer';
};

export interface SchemeEligibilityCriteria {
  age?: AgeCriteria;
  income?: IncomeCriteria;
  gender?: 'male' | 'female' | 'any';
  location?: LocationCriteria;
  social?: SocialCriteria;
  employment?: EmploymentCriteria;
}

export class Scheme {
  constructor(
    public readonly id: SchemeId,
    private title: string,
    private description: string,
    private ministry: string,
    private category: string,
    private tags: string[],
    private state: string,
    private eligibilityCriteria: SchemeEligibilityCriteria,
    private benefits: string[],
    private documentsRequired: string[],
    private applicationUrl: string | undefined,
    private isActive: boolean,
    public readonly createdAt: Date,
    private updatedAt: Date
  ) {}

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getMinistry(): string {
    return this.ministry;
  }

  getCategory(): string {
    return this.category;
  }

  getTags(): string[] {
    return [...this.tags];
  }

  getState(): string {
    return this.state;
  }

  getEligibilityCriteria(): SchemeEligibilityCriteria {
    return { ...this.eligibilityCriteria };
  }

  getBenefits(): string[] {
    return [...this.benefits];
  }

  getDocumentsRequired(): string[] {
    return [...this.documentsRequired];
  }

  getApplicationUrl(): string | undefined {
    return this.applicationUrl;
  }

  getIsActive(): boolean {
    return this.isActive;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  updateDetails(partial: {
    title?: string;
    description?: string;
    ministry?: string;
    state?: string;
    category?: string;
    tags?: string[];
    eligibilityCriteria?: SchemeEligibilityCriteria;
    benefits?: string[];
    documentsRequired?: string[];
    applicationUrl?: string;
  }): void {
    if (partial.title !== undefined) this.title = partial.title;
    if (partial.description !== undefined) this.description = partial.description;
    if (partial.ministry !== undefined) this.ministry = partial.ministry;
    if (partial.state !== undefined) this.state = partial.state;
    if (partial.category !== undefined) this.category = partial.category;
    if (partial.tags !== undefined) this.tags = [...partial.tags];
    if (partial.eligibilityCriteria !== undefined) {
      this.eligibilityCriteria = { ...partial.eligibilityCriteria };
    }
    if (partial.benefits !== undefined) this.benefits = partial.benefits;
    if (partial.documentsRequired !== undefined) {
      this.documentsRequired = [...partial.documentsRequired];
    }
    if (partial.applicationUrl !== undefined) this.applicationUrl = partial.applicationUrl;
    this.touch();
  }

  setActive(active: boolean): void {
    this.isActive = active;
    this.touch();
  }

  private touch(): void {
    this.updatedAt = new Date();
  }
}
