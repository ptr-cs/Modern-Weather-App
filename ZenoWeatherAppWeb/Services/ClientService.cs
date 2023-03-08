namespace ZenoWeatherAppWeb.Services;

public class ClientService : IClientService
{
    public string Key
    {
        get; set; 
    }
    public string Location
    {
        get; set;
    }

    public string getKey()
    {
        return Key;
    }

    public string getLocation()
    {
        return Location;
    }

    public void setKey(string s)
    {
        Key = s;
    }

    public void setLocation(string s)
    {
        Location = s;
    }
}
