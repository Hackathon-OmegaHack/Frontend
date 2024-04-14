import { UserCircleIcon } from "@heroicons/react/24/solid";

const InfoUser = () => {
  return (
    <div className="card max-h-[12rem] h-fit w-full card-side bg-base-100 shadow-xl text-sm overflow-hidden">
      <div className="bg-secondary w-[30%] grid place-items-center">
        {/* <UserCircleIcon className="w-24 h-24 text-white" /> */}
        <img
          className="w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Foto de perfil"
        />
      </div>
      <ul className="card-body font-medium">
        <li className="text-lg font-bold text-primary">Juanito Perez</li>
        <li>
          <strong>Correo:</strong> juanito@email.com
        </li>
        <li>
          <strong>Telefono:</strong> 123456789
        </li>
        <li>
          <strong>Dirección:</strong> Calle 123, Barrio
        </li>
        <li>
          <strong>Ciudad:</strong> Medellín
        </li>
      </ul>
    </div>
  );
};

export default InfoUser;
