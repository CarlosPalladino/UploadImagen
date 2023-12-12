using Microsoft.EntityFrameworkCore;
using UploadImagen.Models;

namespace UploadImagen.Data
{
    public class DataContext :DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :base(options)
        {
            
        }

        public DbSet<Imagen> Imagens { get; set; }



   
    }
}
