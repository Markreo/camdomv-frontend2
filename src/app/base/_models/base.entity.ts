export class BaseEntity {
  id: string;
  createdAt: Date;

  constructor(entity: Partial<BaseEntity> = {}) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
  }
}
