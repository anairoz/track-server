CREATE DATABASE track CHARACTER SET utf8 COLLATE utf8_general_ci;

create table parcel
(
    id                  integer auto_increment primary key not null,
    customerId          integer not null,
    senderId            integer not null,
    receiverId          integer not null,
    sendingLocationId   integer not null,
    receivingLocationId integer not null,
    createDate timestamp                          not null default current_timestamp(),
    updateDate timestamp                          not null default current_timestamp() on update current_timestamp()
 );

 create table parcelProperties
(
    id          integer auto_increment primary key not null,
    width       double not null,
    height      double not null,
    weight      double not null,
    container   varchar(256) not null,
    cost        decimal(11,2) not null
 );


create table customer
(
 	id          integer auto_increment primary key not null,
    name        varchar(256) not null,
    email       varchar(256) not null,
    createDate  timestamp                          not null default current_timestamp(),
    updateDate  timestamp                          not null default current_timestamp() on update current_timestamp()
    companyId   integer not null
);

create table customerPerson(
	id         integer auto_increment primary key not null,
    customerId integer not null,
    login      varchar(256) not null,
    password   varchar(256) not null
);

create table client(
	id             integer auto_increment primary key not null,
    firstName      varchar(256) not null,
    lastName       varchar(256) not null,
    phoneNumber    varchar(15) not null,
    uniqueClientId varchar(50) not null,
    clientCode     varchar(256) not null,
    createDate timestamp                          not null default current_timestamp(),
    updateDate timestamp                          not null default current_timestamp() on update current_timestamp()
 );

create table location(
	id         integer auto_increment primary key not null,
    country    varchar(256) not null,
    region     varchar(256) not null,
    city       varchar(256) not null,
    address    varchar(256) not null
);

create table status(
	id         int auto_increment not null primary key,
    name       varchar(256) not null,
    value      varchar(256) not null
);

create table parcel_status(
	id         int auto_increment not null primary key,
    statusId   integer not null,
    parcelId   integer not null,
    `order`    integer not null,
    isSet      bool not null default false,
    updateDate timestamp                          not null default current_timestamp() on update current_timestamp()
 );

alter table parcel
add constraint fk_parcel_properties
foreign key (id) references parcelProperties(id);

alter table customer
add constraint fk_customer_properties
foreign key (id) references customerProperties(id);

alter table parcel
add constraint fk_customer_parcel
foreign key (customerId) references customer(id);

alter table customerPerson
add constraint fk_customer_person
foreign key (customerId) references customer(id);

alter table parcel
add constraint fk_parcel_client1
foreign key (senderId) references client(id);

alter table parcel
add constraint fk_parcel_client2
foreign key (receiverId) references client(id);

alter table parcel
add constraint fk_parcel_location1
foreign key (sendingLocationId) references location(id);

alter table parcel
add constraint fk_parcel_location2
foreign key (receivingLocationId) references location(id);

alter table parcel_status
add constraint fk_parcel_status_parcel
foreign key (parcelId) references parcel(id);

alter table parcel_status
add constraint fk_parcel_status_status
foreign key (statusId) references status(id);

alter table customer drop column companyId;

alter table customer
drop foreign key fk_customer_properties;

drop table customerproperties;
