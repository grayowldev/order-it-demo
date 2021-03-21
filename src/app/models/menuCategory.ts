import { Dish } from "./dish";

export interface MenuCategory {
    id: string;
    name: string;
    dishList:Dish[];
}