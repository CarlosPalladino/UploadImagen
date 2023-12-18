using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using UploadImagen.Dtos;
using UploadImagen.Models;
using UploadImagen.Repositories;

namespace UploadImagen.Controllers
{
    [Route("Images/[controller]")]
    [ApiController]
    public class ImageController : Controller
    {

        private readonly ImagenRepository _imagen;
        private readonly IMapper _mapper;

        public ImageController(ImagenRepository imagen, IMapper mapper)
        {
            _imagen = imagen;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Imagen>))]
        public IActionResult GetImagenes()
        {
            var img = _mapper.Map<List<UploadImagenDto>>(_imagen.GetAllImagen());
            if (!ModelState.IsValid)

                return BadRequest(ModelState);

            return Ok(img);
        }
        [HttpGet("{ImagenId}")]
        [ProducesResponseType(200, Type = typeof(Imagen))]
        [ProducesResponseType(400)]

        public IActionResult GetImage(Guid ImagenId)
        {

            if (!_imagen.ImagenExist(ImagenId))
                return NotFound();




            var img = _mapper.Map<UploadImagenDto>(_imagen.GetImagen(ImagenId));
            if (!ModelState.IsValid)
                return BadRequest();


            return Ok(img);
        }
        [HttpPut("{ImagenId}")]
        [ProducesResponseType(200, Type = typeof(Imagen))]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]

        public IActionResult UpdateImagen(Guid ImagenId, UploadImagenDto updateImagen)
        {

            if (updateImagen == null)
                return BadRequest(ModelState);

            if (ImagenId != updateImagen.Id)
                return BadRequest(ModelState);

            if (!_imagen.ImagenExist(ImagenId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var img = _mapper.Map<Imagen>(updateImagen);

            return Ok("Imagen Actualizada");
        }
        [HttpDelete("{ImagenId}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult DeleteImagen(Guid ImagenId)
        {
            if (!_imagen.ImagenExist(ImagenId))
                return NotFound();


            var imgToDelete = _mapper.Map<Imagen>(ImagenId);
                if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (!_imagen.DeleteImage(imgToDelete))
                ModelState.AddModelError("", "Algo paso mientras se eliminaba");
            return Ok("Imagen eliminada ");
        }









    }
}
