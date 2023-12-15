using UploadImagen.Data;
using UploadImagen.Interfaces;
using UploadImagen.Models;

namespace UploadImagen.Repositories
{
    public class ImagenRepository : ImageInterface
    {

        private readonly DataContext _contex;
        public ImagenRepository(DataContext context)
        {
            _contex = context;
        }

        public bool CreateImage(Imagen image)
        {
           _contex.Add(image);
            return Save(image);
        }

        public bool DeleteImage(Imagen image)
        {
            _contex.Remove(image);
            return Save(image);
        }

        public ICollection<Imagen> GetAllImagen()
        {
            return _contex.Imagens.ToList();
        }

        public Imagen GetImagen(Guid Id)
        {
            return _contex.Imagens.Where(i => i.Id == Id).FirstOrDefault();
        }

        public bool ImagenExist(Guid Id)
        {
            return _contex.Imagens.Any(i => i.Id == Id);

        }

        public bool Save(Imagen image)
        {
            var saved = _contex.SaveChanges();
            return saved > 0 ?true :false;
        }

        public bool UpdateImage(Imagen image)
        { 
            _contex.Update(image);  
            return Save(image);
        }
    }
}
