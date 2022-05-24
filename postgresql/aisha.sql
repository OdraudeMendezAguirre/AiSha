CREATE DATABASE aisha_db;

CREATE TABLE productos_tb (id_producto int PRIMARY KEY, n_prod text, p_prod int, d_prod text, almcn_prod int, img_prod text );
CREATE TABLE usuarios_tb (id_usuario int PRIMARY KEY, correo text, contrasena text);
CREATE TABLE ticket_tb (id_ticket int PRIMARY KEY, ptot_ticket int, date_ticket date, hr_ticket time, n_prod int);
CREATE TABLE ventas_tb (id_ventas int PRIMARY KEY, id_ticket int);

ALTER TABLE ventas_tb add constraint FK_id_ticket FOREIGN KEY (id_ticket) references ticket_tb(id_ticket);

INSERT INTO usuarios_tb (id_usuario,correo,contrasena) VALUES ('1','admin@Aisha.com.mx','aisha');

INSERT INTO productos_tb (id_producto,n_prod,p_prod,d_prod,almcn_prod,img_prod) 
VALUES ('1','Sombra de ojos  HEBLEE (is this real life?) 12 eye shadow pallet',
'250','Paleta de sombra de ojos 12 tonos ','10','https://scontent.fjal3-1.fna.fbcdn.net/v/t1.6435-9/180791869_113281207561597_4155900210052082365_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a26aad&_nc_ohc=OojSEE0nqJUAX9IY0kb&_nc_ht=scontent.fjal3-1.fna&oh=00_AT9NOp9qKhh_tWlL4118P4QL1fjQnddHBezZEywavG-77Q&oe=626FF3DF');


INSERT INTO productos_tb (id_producto,n_prod,p_prod,d_prod,almcn_prod,img_prod) 
VALUES ('2','Sombra de ojos  HEBLEE (is this real life?) 12 eye shadow pallet','250','Paleta de sombra de ojos 12 tonos ','10','https://scontent.fjal3-1.fna.fbcdn.net/v/t1.6435-9/180791869_113281207561597_4155900210052082365_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a26aad&_nc_ohc=OojSEE0nqJUAX9IY0kb&_nc_ht=scontent.fjal3-1.fna&oh=00_AT9NOp9qKhh_tWlL4118P4QL1fjQnddHBezZEywavG-77Q&oe=626FF3DF');
INSERT INTO productos_tb (id_producto,n_prod,p_prod,d_prod,almcn_prod,img_prod) 
VALUES ('3','Huxia Beauty (EYELINER) whit Eyelash','30','Delineador de Ojos Negro ','30','https://scontent.fjal3-1.fna.fbcdn.net/v/t1.6435-9/177708412_110803437809374_3327169197420704792_n.jpg?stp=dst-jpg_s600x600&_nc_cat=101&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=MB5DizSKE-oAX_HSMwo&tn=xpySAfNCWto6QnGu&_nc_ht=scontent.fjal3-1.fna&oh=00_AT_aXc8ZZPc8zo3qS0Utx8cZwya9eU-u20Vn5GaLf-soUg&oe=62A9D8FB');
INSERT INTO productos_tb (id_producto,n_prod,p_prod,d_prod,almcn_prod,img_prod) 
VALUES ('4','Huxia Beauty (PRIMER) Minimiza Poros','70','Primer para minimizar poros, marca HUXIABEAUTY 40ml ','20','https://scontent.fjal3-1.fna.fbcdn.net/v/t1.6435-9/177426934_110804301142621_700941846535963076_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=X_XliUOaVSgAX_r1WfF&tn=xpySAfNCWto6QnGu&_nc_ht=scontent.fjal3-1.fna&oh=00_AT-RzeXmFTZ-OZTy9xug8gPRh3U4_FXxGEFK3jfWiwhrsQ&oe=62A9C174');
INSERT INTO productos_tb (id_producto,n_prod,p_prod,d_prod,almcn_prod,img_prod) 
VALUES ('5','Paleta rubor s.t.r COLOR MINI BLUSH','100','Paleta bitono ruborizante, maquillaje dama 2 colores ','10','https://scontent.fjal3-1.fna.fbcdn.net/v/t1.6435-9/177889806_110804547809263_5420957160341905192_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=LC8bE-CL2bwAX-0_2R3&_nc_ht=scontent.fjal3-1.fna&oh=00_AT9vZKUTq9iTQVT3t0_XeEcBtHwLA98a8KEB4rgo-gDUbw&oe=62A73EEA');
INSERT INTO productos_tb (id_producto,n_prod,p_prod,d_prod,almcn_prod,img_prod) 
VALUES ('6','Gel pour sourcils / Eyebrown GEL (Mishining)','145','Pintura para cejas color cafe oscuro en gel ','15','https://scontent.fjal3-1.fna.fbcdn.net/v/t1.6435-9/177534345_110803534476031_7859827932315216175_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=TSC53J_n4P4AX9LdYF5&_nc_ht=scontent.fjal3-1.fna&oh=00_AT-Hw5S0t7lX8gdpfXTSvTiX7KZr8Ghr33GXjQfd-kUwrA&oe=62A87DCA');

UPDATE productos_tb SET img_prod='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2F109625424242625%2Fposts%2Fsombras-heblee-is-this-real-life-3-tonos-diferentes-a-solo-4000%2F152564203282080%2F&psig=AOvVaw08Midk_4LmFxNoeBVTJ4zC&ust=1652877996760000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPDi28LI5vcCFQAAAAAdAAAAABAE' WHERE id_producto=1;
ALTER TABLE ticket_tb DROP date_ticket;
ALTER TABLE ticket_tb DROP hr_ticket;