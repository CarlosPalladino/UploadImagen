namespace UploadImagen.Dtos
{
    public class UploadImagenDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public byte[] Data { get; set; }
    }
}
