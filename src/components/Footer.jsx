import React from "react";
import { defaultCities } from "../utils/constants";

const Footer = ({ fetchWeatherByCity, theme }) => {
  const getThemeStyles = () => {
    switch (theme) {
      case "dark":
        return {
          textColor: "text-purple-300",
          socialIconColors: {
            twitter: "text-blue-400",
            github: "text-purple-400",
            linkedin: "text-blue-500",
          },
          socialHoverColors: {
            twitter: "hover:text-blue-300",
            github: "hover:text-purple-300",
            linkedin: "hover:text-blue-400",
          },
        };
      case "custom":
        return {
          textColor: "text-pink-300",
          socialIconColors: {
            twitter: "text-blue-400",
            github: "text-pink-400",
            linkedin: "text-blue-500",
          },
          socialHoverColors: {
            twitter: "hover:text-blue-300",
            github: "hover:text-pink-300",
            linkedin: "hover:text-blue-400",
          },
        };
      default:
        return {
          textColor: "text-purple-100",
          socialIconColors: {
            twitter: "text-blue-600",
            github: "text-gray-800",
            linkedin: "text-blue-700",
          },
          socialHoverColors: {
            twitter: "hover:text-blue-500",
            github: "hover:text-gray-600",
            linkedin: "hover:text-blue-600",
          },
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <footer className="bg-gradient-to-b from-black/10 to-black/30 backdrop-blur-lg border-t border-white/10 px-6 py-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <i className="fas fa-cloud-sun text-3xl text-yellow-400 animate-float"></i>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Hava Durumu
              </h4>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Güncel ve doğru hava durumu bilgileri için güvenilir kaynağınız.
              Detaylı tahminler ve anlık verilerle her zaman bir adım önde olun.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <i className="fas fa-shield-alt text-green-400"></i>
              <span className="opacity-70">Güvenilir ve Doğru Veriler</span>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Popüler Şehirler
            </h5>
            <div className="grid grid-cols-2 gap-3">
              {defaultCities.slice(0, 6).map((city) => (
                <button
                  key={city}
                  onClick={() => fetchWeatherByCity(city)}
                  className="text-sm px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 text-left opacity-80 hover:opacity-100 hover:translate-x-1 cursor-pointer"
                  aria-label={`Şehir seç: ${city}`}
                >
                  <i className="fas fa-map-marker-alt mr-2 text-xs text-blue-400"></i>
                  {city}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Bizi Takip Edin
            </h5>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => window.open("https://twitter.com", "_blank")}
                className={`flex items-center space-x-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 group cursor-pointer ${styles.socialHoverColors.twitter}`}
                aria-label="Twitter'a git"
              >
                <i
                  className={`fab fa-twitter text-xl ${styles.socialIconColors.twitter} group-hover:scale-110 transition-transform`}
                ></i>
                <span className="text-sm opacity-80 group-hover:opacity-100">
                  Twitter
                </span>
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/developerharmony", "_blank")
                }
                className={`flex items-center space-x-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 group cursor-pointer ${styles.socialHoverColors.github}`}
                aria-label="Harmony Github sayfasına git"
              >
                <i
                  className={`fab fa-github text-xl ${styles.socialIconColors.github} group-hover:scale-110 transition-transform`}
                ></i>
                <span className="text-sm opacity-80 group-hover:opacity-100">
                  Github
                </span>
              </button>
              <button
                onClick={() => window.open("https://linkedin.com", "_blank")}
                className={`flex items-center space-x-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 group cursor-pointer ${styles.socialHoverColors.linkedin}`}
                aria-label="LinkedIn'e git"
              >
                <i
                  className={`fab fa-linkedin text-xl ${styles.socialIconColors.linkedin} group-hover:scale-110 transition-transform`}
                ></i>
                <span className="text-sm opacity-80 group-hover:opacity-100">
                  LinkedIn
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-60 cursor-pointer">
              © 2025 Hava Durumu.{" "}
              <span
                className={`font-semibold ${styles.textColor}`}
                onClick={() =>
                  window.open("https://github.com/developerharmony", "_blank")
                }
              >
                Harmony
              </span>{" "}
              tarafından geliştirilmiştir. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-2 text-sm opacity-60">
              <i className="fas fa-database text-blue-400"></i>
              <p className="text-sm opacity-60 cursor-pointer">
                Veriler{" "}
                <span
                  className={`font-semibold ${styles.textColor}`}
                  onClick={() =>
                    window.open("https://openweathermap.org/api", "_blank")
                  }
                  aria-label="Harmony Github sayfasına git"
                >
                  OpenWeatherMap API{" "}
                </span>{" "}
                tarafından sağlanmaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
