export class KeyLocalDetector
{
    static get isKey() : boolean
    {
       let key = localStorage.getItem('apiKey');
       if (key) return true;
       return false;
    }

    static Key() : string
    {
        return localStorage.getItem('apiKey');
    }
}