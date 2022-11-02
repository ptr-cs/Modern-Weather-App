using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ZenoWeatherAppCommon.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AdministrativeAreas",
                columns: table => new
                {
                    ID = table.Column<string>(type: "TEXT", nullable: false),
                    LocalizedName = table.Column<string>(type: "TEXT", nullable: true),
                    EnglishName = table.Column<string>(type: "TEXT", nullable: true),
                    LocalizedType = table.Column<string>(type: "TEXT", nullable: true),
                    EnglishType = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdministrativeAreas", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    ID = table.Column<string>(type: "TEXT", nullable: false),
                    LocalizedName = table.Column<string>(type: "TEXT", nullable: true),
                    EnglishName = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "CurrentConditions",
                columns: table => new
                {
                    CurrentConditionsId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    WeatherText = table.Column<string>(type: "TEXT", nullable: true),
                    WeatherIcon = table.Column<int>(type: "INTEGER", nullable: false),
                    LocalObservationDateTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    IsDayTime = table.Column<bool>(type: "INTEGER", nullable: false),
                    Temperature_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    Temperature_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    Temperature_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    Temperature_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    Temperature_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    Temperature_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    Temperature_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    RelativeHumidity = table.Column<int>(type: "INTEGER", nullable: false),
                    UVIndex = table.Column<int>(type: "INTEGER", nullable: false),
                    UVIndexText = table.Column<string>(type: "TEXT", nullable: true),
                    DewPoint_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    DewPoint_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    DewPoint_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    DewPoint_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    DewPoint_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    DewPoint_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    DewPoint_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    Wind_WindId = table.Column<int>(type: "INTEGER", nullable: true),
                    Wind_Speed_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    Wind_Speed_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    Wind_Speed_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    Wind_Speed_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    Wind_Speed_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    Wind_Speed_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    Wind_Speed_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    Wind_Direction_Degrees = table.Column<int>(type: "INTEGER", nullable: true),
                    Wind_Direction_Localized = table.Column<string>(type: "TEXT", nullable: true),
                    Wind_Direction_English = table.Column<string>(type: "TEXT", nullable: true),
                    Visibility_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    Visibility_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    Visibility_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    Visibility_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    Visibility_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    Visibility_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    Visibility_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    CloudCover = table.Column<int>(type: "INTEGER", nullable: false),
                    Ceiling_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    Ceiling_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    Ceiling_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    Ceiling_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    Ceiling_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    Ceiling_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    Ceiling_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    Pressure_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    Pressure_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    Pressure_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    Pressure_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    Pressure_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    Pressure_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    Pressure_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    ApparentTemperature_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    ApparentTemperature_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    ApparentTemperature_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    ApparentTemperature_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    ApparentTemperature_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    ApparentTemperature_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    ApparentTemperature_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    WindChillTemperature_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    WindChillTemperature_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    WindChillTemperature_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    WindChillTemperature_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    WindChillTemperature_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    WindChillTemperature_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    WindChillTemperature_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    WetBulbTemperature_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    WetBulbTemperature_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    WetBulbTemperature_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    WetBulbTemperature_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    WetBulbTemperature_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    WetBulbTemperature_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    WetBulbTemperature_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_PrecipitationSummaryId = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_PastHour_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_PastHour_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_PastHour_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_PastHour_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_PastHour_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_PastHour_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_PastHour_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_Past3Hours_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past3Hours_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_Past3Hours_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past3Hours_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_Past3Hours_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_Past3Hours_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past3Hours_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_Past6Hours_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past6Hours_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_Past6Hours_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past6Hours_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_Past6Hours_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_Past6Hours_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past6Hours_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_Past9Hours_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past9Hours_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_Past9Hours_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past9Hours_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_Past9Hours_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_Past9Hours_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past9Hours_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_Past12Hours_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past12Hours_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_Past12Hours_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past12Hours_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_Past12Hours_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_Past12Hours_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past12Hours_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_Past18Hours_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past18Hours_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_Past18Hours_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past18Hours_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_Past18Hours_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_Past18Hours_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past18Hours_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_Past24Hours_DataReadingPairId = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past24Hours_Metric_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_Past24Hours_Metric_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past24Hours_Metric_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    PrecipitationSummary_Past24Hours_Imperial_Value = table.Column<double>(type: "REAL", nullable: true),
                    PrecipitationSummary_Past24Hours_Imperial_UnitType = table.Column<int>(type: "INTEGER", nullable: true),
                    PrecipitationSummary_Past24Hours_Imperial_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    HasPrecipitation = table.Column<bool>(type: "INTEGER", nullable: false),
                    PrecipitationType = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurrentConditions", x => x.CurrentConditionsId);
                });

            migrationBuilder.CreateTable(
                name: "Forecasts",
                columns: table => new
                {
                    ForecastId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Headline_EffectiveDate = table.Column<DateTime>(type: "TEXT", nullable: true),
                    Headline_Severity = table.Column<int>(type: "INTEGER", nullable: true),
                    Headline_Text = table.Column<string>(type: "TEXT", nullable: true),
                    Headline_Category = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Forecasts", x => x.ForecastId);
                });

            migrationBuilder.CreateTable(
                name: "TimeZones",
                columns: table => new
                {
                    Code = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    GmtOffset = table.Column<float>(type: "REAL", nullable: false),
                    IsDaylightSaving = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TimeZones", x => x.Code);
                });

            migrationBuilder.CreateTable(
                name: "DailyForecast",
                columns: table => new
                {
                    DailyForecastId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Temperature_TemperaturesId = table.Column<int>(type: "INTEGER", nullable: true),
                    Temperature_Maximum_Value = table.Column<double>(type: "REAL", nullable: true),
                    Temperature_Maximum_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    Temperature_Minimum_Value = table.Column<double>(type: "REAL", nullable: true),
                    Temperature_Minimum_Unit = table.Column<string>(type: "TEXT", nullable: true),
                    Day_Icon = table.Column<int>(type: "INTEGER", nullable: true),
                    Day_IconPhrase = table.Column<string>(type: "TEXT", nullable: true),
                    Day_HasPrecipitation = table.Column<bool>(type: "INTEGER", nullable: true),
                    Day_PrecipitationType = table.Column<string>(type: "TEXT", nullable: true),
                    Day_PrecipitationIntensity = table.Column<string>(type: "TEXT", nullable: true),
                    Night_Icon = table.Column<int>(type: "INTEGER", nullable: true),
                    Night_IconPhrase = table.Column<string>(type: "TEXT", nullable: true),
                    Night_HasPrecipitation = table.Column<bool>(type: "INTEGER", nullable: true),
                    Night_PrecipitationType = table.Column<string>(type: "TEXT", nullable: true),
                    Night_PrecipitationIntensity = table.Column<string>(type: "TEXT", nullable: true),
                    ForecastId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DailyForecast", x => x.DailyForecastId);
                    table.ForeignKey(
                        name: "FK_DailyForecast_Forecasts_ForecastId",
                        column: x => x.ForecastId,
                        principalTable: "Forecasts",
                        principalColumn: "ForecastId");
                });

            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    Key = table.Column<string>(type: "TEXT", nullable: false),
                    Version = table.Column<int>(type: "INTEGER", nullable: false),
                    Type = table.Column<string>(type: "TEXT", nullable: true),
                    Rank = table.Column<int>(type: "INTEGER", nullable: true),
                    LocalizedName = table.Column<string>(type: "TEXT", nullable: true),
                    EnglishName = table.Column<string>(type: "TEXT", nullable: true),
                    PrimaryPostalCode = table.Column<string>(type: "TEXT", nullable: true),
                    CountryID = table.Column<string>(type: "TEXT", nullable: true),
                    AdministrativeAreaID = table.Column<string>(type: "TEXT", nullable: true),
                    TimeZoneCode = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.Key);
                    table.ForeignKey(
                        name: "FK_Locations_AdministrativeAreas_AdministrativeAreaID",
                        column: x => x.AdministrativeAreaID,
                        principalTable: "AdministrativeAreas",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_Locations_Countries_CountryID",
                        column: x => x.CountryID,
                        principalTable: "Countries",
                        principalColumn: "ID");
                    table.ForeignKey(
                        name: "FK_Locations_TimeZones_TimeZoneCode",
                        column: x => x.TimeZoneCode,
                        principalTable: "TimeZones",
                        principalColumn: "Code");
                });

            migrationBuilder.CreateIndex(
                name: "IX_DailyForecast_ForecastId",
                table: "DailyForecast",
                column: "ForecastId");

            migrationBuilder.CreateIndex(
                name: "IX_Locations_AdministrativeAreaID",
                table: "Locations",
                column: "AdministrativeAreaID");

            migrationBuilder.CreateIndex(
                name: "IX_Locations_CountryID",
                table: "Locations",
                column: "CountryID");

            migrationBuilder.CreateIndex(
                name: "IX_Locations_TimeZoneCode",
                table: "Locations",
                column: "TimeZoneCode");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CurrentConditions");

            migrationBuilder.DropTable(
                name: "DailyForecast");

            migrationBuilder.DropTable(
                name: "Locations");

            migrationBuilder.DropTable(
                name: "Forecasts");

            migrationBuilder.DropTable(
                name: "AdministrativeAreas");

            migrationBuilder.DropTable(
                name: "Countries");

            migrationBuilder.DropTable(
                name: "TimeZones");
        }
    }
}
