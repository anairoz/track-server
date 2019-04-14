CREATE DATABASE track CHARACTER SET utf8 COLLATE utf8_general_ci;

create table user
(
  id         integer auto_increment primary key not null,
  email      varchar(50)                        not null,
  phone      varchar(13)                        not null,
  firstName  varchar(50),
  lastName   varchar(50),
  role       varchar(50)                                 default 'simple_user',
  createDate timestamp                          not null default current_timestamp(),
  updateDate timestamp                          not null default current_timestamp() on update current_timestamp()
);

alter table user
  add column password varchar(50) not null;

alter table user
modify column email varchar(50) not null unique;

create table company
(
	id			integer auto_increment primary key not null,
    name	varchar(50)						not null unique,
    createDate	timestamp						not null default current_timestamp(),
    updateDate	timestamp						not null default current_timestamp() on update current_timestamp()
);

alter table company
add column email varchar(50) not null unique;

alter table user
add constraint fk_companyId
foreign key (companyId) references company(id);

insert into company(name, email) values ('Fedex','fedex@gmail.com');
    
insert into user(email, phone, password, firstName, lastName, role, companyId)
values ('volodyakrajetsky@gmail.com', '0502220390', 'password', 'Volodymyr', 'Kraiteskyi', 'admin', 1);
