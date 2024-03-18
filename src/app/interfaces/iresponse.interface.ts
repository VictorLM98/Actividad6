import { IPersona } from "./ipersona.interface";

export interface IResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    results: IPersona[]

}
