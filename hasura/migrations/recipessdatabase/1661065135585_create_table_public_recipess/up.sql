CREATE TABLE "public"."recipess" ("id" serial NOT NULL, "image_url" text NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "ingredients" Text[] NOT NULL, "steps" Text[] NOT NULL, "categories" Text[] NOT NULL, "duration" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );COMMENT ON TABLE "public"."recipess" IS E'This is recipes table';
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_recipess_updated_at"
BEFORE UPDATE ON "public"."recipess"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_recipess_updated_at" ON "public"."recipess" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
