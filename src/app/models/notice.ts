import { NoticeCategory } from "./notice-category";
import { NoticeDocument } from "./notice-document";

export interface Notice {
  id: number;
  title: string;
  description: string;
  created_by: number;
  notice_category_id: number;
  expiry_date: string;
  approved_by: number;
  date_approved: string;
  deleted: number;
  is_quick_link: number;
  quick_link_title: string;
  deleted_by: number;
  deleted_at: string;
  created_at: string;
  updated_at: string;
  image_url: string;
  notice_category: NoticeCategory;
  notice_documents: NoticeDocument[];
}
