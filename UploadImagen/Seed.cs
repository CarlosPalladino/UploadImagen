using UploadImagen.Data;
using UploadImagen.Models;

namespace UploadImagen
{
    public class Seed
    {
        private readonly DataContext _context;

        public Seed(DataContext contex)
        {
            _context = contex;
        }

        public void SeedDataContext()
        {
            if (!_context.Imagens.Any())
            {
                var imagenes = new List<Imagen>()
                {
                    new Imagen()
                    {
                        Id = Guid.NewGuid(),
                        Name = "Imagen1",
                        Data = Convert.FromBase64String("iVBORw0KGg..."), // Aquí irían los datos de tu imagen en formato base64
                        ContentType = "image/jpeg"
                    },
                    // Puedes agregar más imágenes aquí...
                };

                _context.SaveChanges();
            }
        }
    }












}

