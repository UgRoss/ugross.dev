import { compareByDate } from '~/app/utils';

interface BaseContent {
  date: string;
  id: string;
  slug: string;
  tags?: string[];
  title: string;
}

export class ContentfulContentService<T extends BaseContent> {
  private records: T[];
  constructor(records: T[]) {
    this.records = [...records].sort(compareByDate);
  }

  public getAll(): T[] {
    return this.records;
  }

  public getBySlug(slug: string): T | undefined {
    return this.records.find((record) => record.slug === slug);
  }

  public getByTag(tag: string): T[] {
    return this.records.filter((record) => record.tags?.includes(tag));
  }

  public getLastItems(count: number): T[] {
    return this.records.slice(0, count);
  }
}
