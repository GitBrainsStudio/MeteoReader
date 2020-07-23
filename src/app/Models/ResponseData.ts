export interface PaginatorData
{
    pages:Page[];
}

export interface Page
{
    index:number;
    timeParts : DatePart[];
}


export interface ResponseData {
    cod:     string;
    message: number;
    cnt:     number;
    list : DatePart[];
}
 

export interface DatePart {
    dt:         number | Date;
    main:       Main;
    weather:    Weather[];
    clouds:     Clouds;
    wind:       Wind;
    visibility: number;
    pop:        number;
    rain:       Rain;
    sys:        Sys;
    dt_txt:     Date;
}

export interface Clouds {
    all: number;
}

export interface Main {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    sea_level:  number;
    grnd_level: number;
    humidity:   number;
    temp_kf:    number;
}

export interface Rain {
    "3h": number;
}

export interface Sys {
    pod: string;
}

export interface Weather {
    id:          number;
    main:        string;
    description: string;
    icon:        string;
}

export interface Wind {
    speed: number;
    deg:   number;
}
