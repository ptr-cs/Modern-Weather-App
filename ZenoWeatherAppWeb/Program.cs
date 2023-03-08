using ZenoWeatherApp.Services;
using ZenoWeatherAppWeb.Services;

namespace ZenoWeatherAppWeb;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddRazorPages();

        // Bundle and minify static file assets:
        builder.Services.AddWebOptimizer(pipeline =>
        {
            pipeline.AddScssBundle("/css/bundle.css", "/lib/weather-icons-master/sass/weather-icons.scss", "/css/*.scss");
        });

        //builder.Services.Configure<WeatherService>(config =>
        //{

        //});

        builder.Services.AddScoped<IWeatherService, WeatherService>();
        builder.Services.AddScoped<IClientService, ClientService>();

        builder.Services.AddDistributedMemoryCache();

        builder.Services.AddSession(options =>
        {
            options.IdleTimeout = TimeSpan.FromSeconds(1000);
            options.Cookie.HttpOnly = true;
            options.Cookie.IsEssential = true;
        });

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (!app.Environment.IsDevelopment())
        {
            app.UseExceptionHandler("/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }

        app.UseHttpsRedirection();

        app.UseWebOptimizer(); // Bundling and Minification

        app.UseStaticFiles();

        app.UseRouting();

        app.UseAuthorization();

        //app.MapRazorPages();

        app.UseSession();

        app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

        app.Run();
    }
}