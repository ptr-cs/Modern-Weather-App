namespace ZenoWeatherAppWeb.Services;

public interface IClientService
{
    public string getKey();
    public void setKey(string s);
    public string getLocation();
    public void setLocation(string s);
}
