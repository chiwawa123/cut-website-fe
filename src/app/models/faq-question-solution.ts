import { FaqHeaderSolution } from "./faq-header-solution";

export interface FaqQuestionSolution {
	question_id:number;
	category_id:number;
	question_bul_num:number;
	the_question:string;
	image_name:string;
	image_path:string;
	ans_headers:FaqHeaderSolution[];
}
