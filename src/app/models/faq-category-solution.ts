import { FaqQuestionSolution } from "./faq-question-solution";

export interface FaqCategorySolution {
	category_id:number;
    category_description:string;
	questions:FaqQuestionSolution[];
}
