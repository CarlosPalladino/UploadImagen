using System.ComponentModel.DataAnnotations;

namespace UploadImagen.Models
{
    public class Imagen
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public byte[] Data { get; set; }
        public string ContentType { get; set; }


    }
}
