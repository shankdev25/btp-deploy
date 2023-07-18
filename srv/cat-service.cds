using trainer as db from '../db/data-model';

service CatalogService {
    entity trainers as projection on db.training;
}



