import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: "Moradia", description: "Contas da Casa" },
            { id: 2, name: "Saúde", description: "Pleano de Saúde e Remédios" },
            { id: 3, name: "Lazer", description: "Cinema, parques, praias, etc" },
            { id: 4, name: "Salário", description: "Recebimento de Salário" },
            { id: 5, name: "Freelas", description: "Trabalhos como freelancer" },
            { id: 6, name: "Música", description: "Gastos e Recebimentos com as Bandas" }
        ];

        return { categories }
    }
}