SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.axions (
    id integer NOT NULL,
    axions_type text NOT NULL,
    axions_amount numeric NOT NULL,
    selling_price numeric NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    image_url text,
    axions_description text
);
CREATE SEQUENCE public.axions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.axions_id_seq OWNED BY public.axions.id;
CREATE TABLE public.cars (
    "ID" integer NOT NULL,
    car_brand text NOT NULL,
    car_model text NOT NULL,
    car_name text NOT NULL,
    car_type text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    images text
);
CREATE SEQUENCE public.cars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.cars_id_seq OWNED BY public.cars."ID";
CREATE TABLE public.favorites (
    id integer NOT NULL,
    name text NOT NULL,
    axion_type text NOT NULL,
    axion_amount numeric NOT NULL,
    phone_number numeric NOT NULL,
    address text NOT NULL,
    email text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.favorites IS 'users favorite axions tabel';
CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;
CREATE TABLE public.messages (
    id integer NOT NULL,
    name text NOT NULL,
    phone_number numeric NOT NULL,
    address text NOT NULL,
    email text NOT NULL,
    message text NOT NULL
);
COMMENT ON TABLE public.messages IS 'users message table';
CREATE SEQUENCE public.messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.messages_id_seq OWNED BY public.messages.id;
CREATE TABLE public.orders (
    id integer NOT NULL,
    name text NOT NULL,
    axion_type text NOT NULL,
    axion_amount numeric NOT NULL,
    phone_number numeric NOT NULL,
    address text NOT NULL,
    email text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    buying_price numeric
);
COMMENT ON TABLE public.orders IS 'axions orders table';
CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
CREATE TABLE public.sellaxions (
    id integer NOT NULL,
    name text NOT NULL,
    axion_type text NOT NULL,
    axion_amount numeric NOT NULL,
    selling_price numeric NOT NULL,
    phone_number numeric NOT NULL,
    address text NOT NULL,
    email text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.sellaxions IS 'user selling table';
CREATE SEQUENCE public.sellaxions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.sellaxions_id_seq OWNED BY public.sellaxions.id;
CREATE TABLE public.students (
    id integer NOT NULL,
    gender character varying NOT NULL,
    firstname character varying NOT NULL,
    lastname character varying NOT NULL
);
CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;
CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
ALTER TABLE ONLY public.axions ALTER COLUMN id SET DEFAULT nextval('public.axions_id_seq'::regclass);
ALTER TABLE ONLY public.cars ALTER COLUMN "ID" SET DEFAULT nextval('public.cars_id_seq'::regclass);
ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);
ALTER TABLE ONLY public.messages ALTER COLUMN id SET DEFAULT nextval('public.messages_id_seq'::regclass);
ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
ALTER TABLE ONLY public.sellaxions ALTER COLUMN id SET DEFAULT nextval('public.sellaxions_id_seq'::regclass);
ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);
ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
ALTER TABLE ONLY public.axions
    ADD CONSTRAINT axions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY ("ID");
ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.sellaxions
    ADD CONSTRAINT sellaxions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_axions_updated_at BEFORE UPDATE ON public.axions FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_axions_updated_at ON public.axions IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_cars_updated_at BEFORE UPDATE ON public.cars FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_cars_updated_at ON public.cars IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_favorites_updated_at BEFORE UPDATE ON public.favorites FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_favorites_updated_at ON public.favorites IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_orders_updated_at BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_orders_updated_at ON public.orders IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_sellaxions_updated_at BEFORE UPDATE ON public.sellaxions FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_sellaxions_updated_at ON public.sellaxions IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_users_updated_at ON public.users IS 'trigger to set value of column "updated_at" to current timestamp on row update';
