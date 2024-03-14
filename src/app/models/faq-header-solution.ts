import { FaqTypicalAnswer } from "./faq-typical-answer";

export interface FaqHeaderSolution {
  header_id:number;
image_name:string;
header_name:string;
header_bul_num:string;
question_id:number;
image_path:string;
answers:FaqTypicalAnswer[];
}
