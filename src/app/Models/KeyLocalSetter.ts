export class KeyLocalSetter
{
    static Write(apiKey:string)
    {
        localStorage.setItem('apiKey', apiKey);
    }
}