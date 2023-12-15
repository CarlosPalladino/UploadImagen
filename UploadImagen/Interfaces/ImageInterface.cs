using UploadImagen.Models;

namespace UploadImagen.Interfaces
{
    public interface ImageInterface
    {
        bool ImagenExist(Guid Id);

        bool CreateImage(Imagen image);

        bool UpdateImage(Imagen image);
        bool DeleteImage(Imagen image);

        bool Save(Imagen image);

        ICollection<Imagen> GetAllImagen();

        Imagen GetImagen(Guid Id);


    }
}
