import { NoticeCategory } from "./notice-category";
import { NoticeDocument } from "./notice-document";

export class Notice {
  id: number | undefined;
  title: string | undefined;
  description: string | undefined;
  created_by: number | undefined;
  notice_category_id: number | undefined;
  expiry_date: string | undefined;
  approved_by: number | undefined;
  date_approved: string | undefined;
  deleted: number | undefined;
  is_quick_link: number | undefined;
  quick_link_title: string | undefined;
  deleted_by: number | undefined;
  deleted_at: string | undefined;
  created_at: string | undefined;
  updated_at: string | undefined;
  image_url: string | undefined;
  notice_category: NoticeCategory | undefined;
  notice_documents: { document: NoticeDocument[]; } | undefined;
}
