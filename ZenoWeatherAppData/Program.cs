using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZenoWeatherAppData
{
    internal class Program
    {
        static void Main(string[] args)
        {
            using (var db = new WeatherContext())
            {
                // Create and save a new Blog
                Console.Write("Enter a name for a new Location: ");
                var name = Console.ReadLine();

                var location = new Location { LocalizedName = name };
                db.Locations.Add(location);
                db.SaveChanges();

                // Display all Blogs from the database
                var query = from b in db.Locations
                            orderby b.LocalizedName
                            select b;

                Console.WriteLine("All locations in the database:");
                foreach (var item in query)
                {
                    Console.WriteLine(item.LocalizedName);
                }

                Console.WriteLine("Press any key to exit...");
                Console.ReadKey();
            }
        }
    }

    public class Country
    {
        public string CountryId
        {
            get; set;
        }

        public string LocalizedName
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
        public string AdministrativeAreaId
        {
            get; set;
        }

        public string LocalizedName
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

        public string Key
        {
            get; set;
        }

        public string Type
        {
            get; set;
        }

        public string LocalizedName
        {
            get; set;
        }

        public string PrimaryPostalCode
        {
            get; set;
        }

        public Country Country
        {
            get; set;
        }

        public AdministrativeArea AdministrativeArea
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
        public DbSet<Location> Locations
        {
            get; set;
        }
    }
}
