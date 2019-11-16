--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-1.pgdg18.04+1)
-- Dumped by pg_dump version 11.5 (Ubuntu 11.5-3.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: failed_jobs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.failed_jobs (
    id bigint NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: failed_jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.failed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: failed_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.failed_jobs_id_seq OWNED BY public.failed_jobs.id;


--
-- Name: matches; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.matches (
    id bigint NOT NULL,
    score character varying(191) NOT NULL,
    "time" character varying(191) NOT NULL,
    mathoperation_id bigint NOT NULL,
    users_id bigint NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: matches_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.matches_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: matches_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.matches_id_seq OWNED BY public.matches.id;


--
-- Name: math_operations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.math_operations (
    id bigint NOT NULL,
    name character varying(191) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: math_operations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.math_operations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: math_operations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.math_operations_id_seq OWNED BY public.math_operations.id;


--
-- Name: math_problems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.math_problems (
    id bigint NOT NULL,
    problem character varying(191) NOT NULL,
    result double precision NOT NULL,
    stage integer NOT NULL,
    mathoperation_id bigint NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: math_problems_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.math_problems_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: math_problems_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.math_problems_id_seq OWNED BY public.math_problems.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(191) NOT NULL,
    batch integer NOT NULL
);


--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: password_resets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.password_resets (
    email character varying(191) NOT NULL,
    token character varying(191) NOT NULL,
    created_at timestamp(0) without time zone
);


--
-- Name: rankings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.rankings (
    id bigint NOT NULL,
    score character varying(191) NOT NULL,
    "time" character varying(191) NOT NULL,
    operation_type bigint NOT NULL,
    users_id bigint NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: rankings_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.rankings_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: rankings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.rankings_id_seq OWNED BY public.rankings.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(191) NOT NULL,
    email character varying(191) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    password character varying(191) NOT NULL,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: failed_jobs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.failed_jobs ALTER COLUMN id SET DEFAULT nextval('public.failed_jobs_id_seq'::regclass);


--
-- Name: matches id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matches ALTER COLUMN id SET DEFAULT nextval('public.matches_id_seq'::regclass);


--
-- Name: math_operations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.math_operations ALTER COLUMN id SET DEFAULT nextval('public.math_operations_id_seq'::regclass);


--
-- Name: math_problems id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.math_problems ALTER COLUMN id SET DEFAULT nextval('public.math_problems_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: rankings id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rankings ALTER COLUMN id SET DEFAULT nextval('public.rankings_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: failed_jobs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.failed_jobs (id, connection, queue, payload, exception, failed_at) FROM stdin;
\.


--
-- Data for Name: matches; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.matches (id, score, "time", mathoperation_id, users_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: math_operations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.math_operations (id, name, created_at, updated_at) FROM stdin;
1	Adição	2019-11-16 01:29:54	2019-11-16 01:29:54
2	Subtração	2019-11-16 01:29:54	2019-11-16 01:29:54
3	Multiplicação	2019-11-16 01:29:54	2019-11-16 01:29:54
4	Divisão	2019-11-16 01:29:54	2019-11-16 01:29:54
5	Exponenciação	2019-11-16 01:29:54	2019-11-16 01:29:54
\.


--
-- Data for Name: math_problems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.math_problems (id, problem, result, stage, mathoperation_id, created_at, updated_at) FROM stdin;
1	11 + 27	38	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
2	24 + 8	32	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
3	22 + 4	26	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
4	5 + 19	24	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
5	17 + 24	41	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
6	9 + 8	17	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
7	12 + 16	28	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
8	2 + 29	31	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
9	13 + 22	35	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
10	27 + 21	48	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
11	4 + 11	15	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
12	7 + 27	34	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
13	18 + 2	20	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
14	21 + 3	24	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
15	10 + 6	16	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
16	7 + 22	29	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
17	29 + 7	36	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
18	20 + 1	21	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
19	7 + 7	14	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
20	29 + 18	47	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
21	26 + 10	36	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
22	20 + 4	24	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
23	18 + 8	26	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
24	18 + 5	23	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
25	22 + 10	32	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
26	3 + 18	21	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
27	21 + 2	23	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
28	1 + 2	3	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
29	9 + 25	34	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
30	21 + 18	39	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
31	26 + 20	46	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
32	12 + 16	28	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
33	10 + 30	40	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
34	7 + 26	33	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
35	26 + 26	52	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
36	16 + 29	45	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
37	27 + 16	43	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
38	1 + 3	4	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
39	11 + 11	22	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
40	10 + 17	27	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
41	19 + 13	32	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
42	12 + 1	13	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
43	16 + 3	19	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
44	3 + 30	33	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
45	14 + 5	19	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
46	23 + 5	28	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
47	24 + 27	51	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
48	17 + 20	37	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
49	17 + 3	20	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
50	29 + 8	37	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
51	6 + 24	30	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
52	22 + 4	26	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
53	21 + 6	27	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
54	20 + 30	50	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
55	29 + 29	58	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
56	8 + 15	23	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
57	28 + 19	47	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
58	18 + 7	25	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
59	10 + 11	21	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
60	28 + 29	57	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
61	29 + 27	56	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
62	3 + 22	25	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
63	18 + 20	38	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
64	29 + 13	42	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
65	3 + 28	31	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
66	8 + 1	9	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
67	11 + 8	19	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
68	24 + 11	35	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
69	3 + 30	33	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
70	14 + 3	17	1	1	2019-11-16 01:29:54	2019-11-16 01:29:54
71	11 - 8	3	1	2	2019-11-16 01:29:54	2019-11-16 01:29:54
72	12 - 3	9	1	2	2019-11-16 01:29:54	2019-11-16 01:29:54
73	27 - 11	16	1	2	2019-11-16 01:29:54	2019-11-16 01:29:54
74	22 - 2	20	1	2	2019-11-16 01:29:54	2019-11-16 01:29:54
75	28 - 15	13	1	2	2019-11-16 01:29:54	2019-11-16 01:29:54
76	19 - 13	6	1	2	2019-11-16 01:29:54	2019-11-16 01:29:54
77	16 - 5	11	1	2	2019-11-16 01:29:54	2019-11-16 01:29:54
78	13 - 1	12	1	2	2019-11-16 01:29:54	2019-11-16 01:29:54
79	30 - 10	20	1	2	2019-11-16 01:29:54	2019-11-16 01:29:54
80	16 - 6	10	1	2	2019-11-16 01:29:54	2019-11-16 01:29:54
81	16 - 16	0	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
82	23 - 10	13	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
83	28 - 9	19	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
84	10 - 2	8	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
85	21 - 20	1	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
86	18 - 16	2	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
87	12 - 9	3	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
88	11 - 5	6	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
89	28 - 23	5	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
90	22 - 1	21	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
91	20 - 5	15	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
92	10 - 2	8	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
93	30 - 11	19	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
94	26 - 24	2	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
95	30 - 18	12	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
96	25 - 9	16	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
97	30 - 26	4	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
98	30 - 25	5	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
99	19 - 4	15	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
100	24 - 17	7	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
101	28 - 5	23	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
102	28 - 27	1	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
103	17 - 16	1	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
104	16 - 2	14	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
105	19 - 7	12	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
106	29 - 22	7	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
107	30 - 5	25	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
108	28 - 9	19	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
109	18 - 13	5	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
110	19 - 19	0	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
111	23 - 22	1	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
112	17 - 13	4	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
113	19 - 7	12	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
114	16 - 1	15	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
115	30 - 22	8	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
116	5 - 5	0	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
117	8 - 7	1	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
118	30 - 28	2	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
119	22 - 13	9	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
120	28 - 19	9	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
121	26 - 17	9	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
122	26 - 10	16	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
123	28 - 6	22	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
124	24 - 4	20	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
125	23 - 1	22	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
126	23 - 2	21	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
127	25 - 4	21	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
128	10 - 9	1	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
129	24 - 18	6	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
130	28 - 13	15	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
131	25 - 16	9	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
132	23 - 11	12	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
133	29 - 8	21	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
134	26 - 11	15	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
135	26 - 20	6	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
136	12 - 8	4	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
137	30 - 19	11	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
138	12 - 2	10	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
139	18 - 15	3	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
140	18 - 13	5	1	2	2019-11-16 01:29:55	2019-11-16 01:29:55
141	1 x 3	3	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
142	1 x 9	9	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
143	10 x 5	50	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
144	4 x 5	20	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
145	4 x 7	28	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
146	1 x 4	4	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
147	2 x 6	12	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
148	6 x 1	6	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
149	9 x 5	45	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
150	1 x 5	5	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
151	6 x 9	54	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
152	1 x 10	10	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
153	8 x 10	80	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
154	8 x 9	72	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
155	10 x 4	40	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
156	10 x 6	60	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
157	3 x 3	9	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
158	6 x 7	42	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
159	5 x 1	5	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
160	9 x 10	90	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
161	7 x 6	42	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
162	9 x 6	54	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
163	5 x 4	20	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
164	10 x 8	80	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
165	10 x 3	30	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
166	4 x 2	8	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
167	2 x 7	14	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
168	6 x 5	30	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
169	3 x 6	18	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
170	1 x 2	2	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
171	10 x 2	20	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
172	4 x 2	8	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
173	3 x 8	24	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
174	3 x 8	24	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
175	7 x 6	42	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
176	8 x 6	48	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
177	10 x 7	70	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
178	7 x 1	7	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
179	5 x 4	20	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
180	7 x 9	63	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
181	10 x 3	30	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
182	6 x 6	36	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
183	10 x 2	20	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
184	2 x 8	16	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
185	9 x 5	45	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
186	8 x 1	8	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
187	1 x 2	2	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
188	5 x 9	45	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
189	1 x 2	2	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
190	2 x 1	2	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
191	9 x 7	63	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
192	7 x 9	63	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
193	8 x 1	8	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
194	7 x 3	21	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
195	10 x 6	60	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
196	10 x 9	90	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
197	2 x 10	20	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
198	9 x 9	81	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
199	1 x 6	6	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
200	2 x 2	4	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
201	1 x 7	7	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
202	8 x 10	80	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
203	1 x 6	6	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
204	4 x 6	24	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
205	7 x 8	56	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
206	9 x 6	54	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
207	10 x 3	30	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
208	10 x 9	90	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
209	4 x 10	40	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
210	10 x 7	70	1	3	2019-11-16 01:29:55	2019-11-16 01:29:55
211	27 ÷ 3	9	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
212	45 ÷ 15	3	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
213	36 ÷ 12	3	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
214	48 ÷ 16	3	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
215	12 ÷ 6	2	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
216	15 ÷ 15	1	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
217	44 ÷ 22	2	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
218	14 ÷ 7	2	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
219	7 ÷ 1	7	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
220	22 ÷ 2	11	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
221	51 ÷ 3	17	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
222	11 ÷ 1	11	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
223	50 ÷ 1	50	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
224	14 ÷ 2	7	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
225	12 ÷ 1	12	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
226	27 ÷ 9	3	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
227	57 ÷ 57	1	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
228	32 ÷ 8	4	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
229	17 ÷ 17	1	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
230	49 ÷ 1	49	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
231	30 ÷ 5	6	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
232	26 ÷ 2	13	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
233	60 ÷ 20	3	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
234	8 ÷ 1	8	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
235	54 ÷ 3	18	1	4	2019-11-16 01:29:55	2019-11-16 01:29:55
236	48 ÷ 3	16	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
237	5 ÷ 1	5	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
238	1 ÷ 1	1	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
239	32 ÷ 2	16	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
240	18 ÷ 1	18	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
241	25 ÷ 1	25	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
242	30 ÷ 2	15	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
243	33 ÷ 11	3	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
244	20 ÷ 10	2	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
245	24 ÷ 24	1	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
246	37 ÷ 37	1	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
247	46 ÷ 1	46	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
248	16 ÷ 16	1	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
249	7 ÷ 1	7	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
250	28 ÷ 1	28	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
251	44 ÷ 2	22	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
252	10 ÷ 5	2	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
253	26 ÷ 1	26	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
254	27 ÷ 9	3	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
255	60 ÷ 6	10	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
256	42 ÷ 21	2	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
257	34 ÷ 17	2	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
258	24 ÷ 3	8	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
259	4 ÷ 2	2	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
260	24 ÷ 4	6	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
261	60 ÷ 15	4	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
262	26 ÷ 13	2	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
263	55 ÷ 55	1	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
264	12 ÷ 2	6	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
265	17 ÷ 1	17	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
266	48 ÷ 16	3	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
267	45 ÷ 3	15	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
268	50 ÷ 5	10	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
269	51 ÷ 17	3	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
270	10 ÷ 5	2	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
271	60 ÷ 20	3	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
272	11 ÷ 1	11	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
273	56 ÷ 4	14	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
274	58 ÷ 1	58	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
275	27 ÷ 9	3	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
276	23 ÷ 23	1	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
277	10 ÷ 1	10	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
278	18 ÷ 3	6	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
279	55 ÷ 5	11	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
280	18 ÷ 3	6	1	4	2019-11-16 01:29:56	2019-11-16 01:29:56
281	14 ^ 2	28	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
282	11 ^ 2	22	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
283	19 ^ 2	38	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
284	8 ^ 2	16	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
285	19 ^ 2	38	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
286	20 ^ 2	40	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
287	4 ^ 2	8	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
288	5 ^ 2	10	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
289	13 ^ 2	26	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
290	11 ^ 2	22	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
291	19 ^ 2	38	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
292	15 ^ 2	30	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
293	19 ^ 2	38	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
294	4 ^ 2	8	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
295	7 ^ 2	14	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
296	18 ^ 2	36	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
297	5 ^ 2	10	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
298	15 ^ 2	30	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
299	7 ^ 2	14	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
300	18 ^ 2	36	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
301	16 ^ 2	32	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
302	19 ^ 2	38	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
303	2 ^ 2	4	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
304	17 ^ 2	34	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
305	11 ^ 2	22	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
306	19 ^ 2	38	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
307	3 ^ 2	6	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
308	2 ^ 2	4	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
309	16 ^ 2	32	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
310	1 ^ 2	2	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
311	6 ^ 2	12	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
312	19 ^ 2	38	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
313	1 ^ 2	2	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
314	5 ^ 2	10	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
315	20 ^ 2	40	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
316	6 ^ 2	12	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
317	12 ^ 2	24	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
318	9 ^ 2	18	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
319	16 ^ 2	32	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
320	4 ^ 2	8	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
321	3 ^ 2	6	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
322	3 ^ 2	6	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
323	8 ^ 2	16	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
324	10 ^ 2	20	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
325	14 ^ 2	28	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
326	7 ^ 2	14	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
327	17 ^ 2	34	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
328	20 ^ 2	40	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
329	11 ^ 2	22	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
330	18 ^ 2	36	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
331	8 ^ 2	16	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
332	5 ^ 2	10	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
333	6 ^ 2	12	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
334	15 ^ 2	30	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
335	17 ^ 2	34	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
336	14 ^ 2	28	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
337	5 ^ 2	10	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
338	12 ^ 2	24	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
339	19 ^ 2	38	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
340	19 ^ 2	38	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
341	1 ^ 2	2	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
342	2 ^ 2	4	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
343	18 ^ 2	36	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
344	20 ^ 2	40	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
345	7 ^ 2	14	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
346	18 ^ 2	36	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
347	16 ^ 2	32	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
348	15 ^ 2	30	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
349	1 ^ 2	2	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
350	9 ^ 2	18	1	3	2019-11-16 01:29:56	2019-11-16 01:29:56
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.migrations (id, migration, batch) FROM stdin;
36	2014_10_12_000000_create_users_table	1
37	2014_10_12_100000_create_password_resets_table	1
38	2019_08_19_000000_create_failed_jobs_table	1
39	2019_11_15_175518_create_math_operations_table	1
40	2019_11_15_175527_create_math_problems_table	1
41	2019_11_15_181300_create_rankings_table	1
42	2019_11_15_232631_create_matches_table	1
\.


--
-- Data for Name: password_resets; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.password_resets (email, token, created_at) FROM stdin;
\.


--
-- Data for Name: rankings; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.rankings (id, score, "time", operation_type, users_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, name, email, email_verified_at, password, remember_token, created_at, updated_at) FROM stdin;
1	teste	teste7@example.org	\N	$2y$10$x9JfR0nknCvEV/58oPzJg.1DKzMvfPBs34EmtqV/Q5BG2wmKTmYUm	\N	2019-11-16 01:29:54	2019-11-16 01:29:54
\.


--
-- Name: failed_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.failed_jobs_id_seq', 1, false);


--
-- Name: matches_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.matches_id_seq', 1, false);


--
-- Name: math_operations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.math_operations_id_seq', 5, true);


--
-- Name: math_problems_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.math_problems_id_seq', 350, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migrations_id_seq', 42, true);


--
-- Name: rankings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.rankings_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: failed_jobs failed_jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY (id);


--
-- Name: matches matches_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matches
    ADD CONSTRAINT matches_pkey PRIMARY KEY (id);


--
-- Name: math_operations math_operations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.math_operations
    ADD CONSTRAINT math_operations_pkey PRIMARY KEY (id);


--
-- Name: math_problems math_problems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.math_problems
    ADD CONSTRAINT math_problems_pkey PRIMARY KEY (id);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: rankings rankings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rankings
    ADD CONSTRAINT rankings_pkey PRIMARY KEY (id);


--
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: password_resets_email_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX password_resets_email_index ON public.password_resets USING btree (email);


--
-- Name: matches matches_mathoperation_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matches
    ADD CONSTRAINT matches_mathoperation_id_foreign FOREIGN KEY (mathoperation_id) REFERENCES public.math_operations(id);


--
-- Name: matches matches_users_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.matches
    ADD CONSTRAINT matches_users_id_foreign FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- Name: math_problems math_problems_mathoperation_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.math_problems
    ADD CONSTRAINT math_problems_mathoperation_id_foreign FOREIGN KEY (mathoperation_id) REFERENCES public.math_operations(id) ON DELETE CASCADE;


--
-- Name: rankings rankings_operation_type_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rankings
    ADD CONSTRAINT rankings_operation_type_foreign FOREIGN KEY (operation_type) REFERENCES public.math_operations(id);


--
-- Name: rankings rankings_users_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rankings
    ADD CONSTRAINT rankings_users_id_foreign FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

