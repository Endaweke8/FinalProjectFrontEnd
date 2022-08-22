alter table "public"."user_recipes" add column "created_at" timestamptz
 not null default now();
