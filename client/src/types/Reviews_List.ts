import {Review_Record} from "types";

export interface Reviews_List {
    error: string | null;
    reviewsList: Review_Record[] | null;
}