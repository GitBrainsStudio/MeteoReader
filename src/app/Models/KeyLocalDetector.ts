export class KeyLocalDetector
{
    static get isKey() : boolean
    {
       let key = localStorage.getItem('apiKey');
       if (key == null || key == undefined) return false;
       return true;
    }

    static Key() : string
    {
        return localStorage.getItem('apiKey');
    }
}