using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace ZenoWeatherAppDataNet6;

internal class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");

        using (var conn = new SqlConnection("Data Source=(localdb)\\mssqllocaldb;Initial Catalog=ZenoWeatherAppData.WeatherContext;Integrated Security=True"))
        {
            conn.Open();

            var sqlCommand = new SqlCommand();
            sqlCommand.Connection = conn;
            sqlCommand.CommandText =
                @"SELECT * FROM Locations;";
            sqlCommand.ExecuteNonQuery();

            using (var context = new WeatherContext(conn.ConnectionString))
            {
                foreach (var c in context.Locations)
                    Console.WriteLine(c.LocalizedName);
            }
        }
    }

    public class Country
    {
        public string? CountryId
        {
            get; set;
        }

        public string? LocalizedName
        {
            get; set;
        }

        public int LocationId
        {
            get; set;
        }
    }

    public class AdministrativeArea
    {
        public string? AdministrativeAreaId
        {
            get; set;
        }

        public string? LocalizedName
        {
            get; set;
        }

        public int LocationId
        {
            get; set;
        }
    }

    public class Location
    {
        public int LocationId
        {
            get; set;
        }

        public string? Key
        {
            get; set;
        }

        public string? Type
        {
            get; set;
        }

        public string? LocalizedName
        {
            get; set;
        }

        public string? PrimaryPostalCode
        {
            get; set;
        }

        public Country? Country
        {
            get; set;
        }

        public AdministrativeArea? AdministrativeArea
        {
            get; set;
        }

        //public List<string> DataSets
        //{
        //    get; set;
        //}
    }

    public class WeatherContext : DbContext
    {
        string conn = "";
        public WeatherContext(string connectionString)
        : base()
        {
            conn = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if (options.IsConfigured == false)
                options.UseSqlServer(conn);
        }

        public DbSet<Location>? Locations
        {
            get; set;
        }
    }
}
