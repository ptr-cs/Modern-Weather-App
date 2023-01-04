using Microsoft.Extensions.Configuration.AzureAppConfiguration;
using Microsoft.FeatureManagement;

namespace ZenoWeatherAppWeb;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        string connectionString = builder.Configuration.GetConnectionString("AppConfig");

        builder.Configuration.AddAzureAppConfiguration(options =>
        {
            options.Connect(connectionString)
            // Load all keys that start with "TestApp:" and have no label
            .Select("TestApp:*", LabelFilter.Null)
            // Configure to reload configuration if the registered sentinel key is modified
            .ConfigureRefresh(refreshOptions => refreshOptions.Register("TestApp:Settings:Sentinel", refreshAll: true));

            // Load all feature flags with no label
            options.UseFeatureFlags();
        });

        // Add services to the container.
        builder.Services.AddRazorPages();

        // Add Azure App Configuration middleware to the container of services:
        builder.Services.AddAzureAppConfiguration();

        // Add feature management to the container of services
        builder.Services.AddFeatureManagement();

        // Bind configuration "TestApp:Settings" section to the Settings object
        builder.Services.Configure<Settings>(builder.Configuration.GetSection("TestApp:Settings"));

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (!app.Environment.IsDevelopment())
        {
            app.UseExceptionHandler("/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }

        // Use Azure App Configuration middleware for dynamic configuration refresh.
        app.UseAzureAppConfiguration();

        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseRouting();

        app.UseAuthorization();

        app.MapRazorPages();

        app.Run();
    }
}