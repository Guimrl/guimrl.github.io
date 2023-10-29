import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

//   const [maintenanceMode, setMaintenanceMode] = useState(true);
//   const [notificationPermission, setNotificationPermission] = useState(false);

//   useEffect(() => {
//     // Verifica se o usuário já deu permissão para notificações
//     if ('Notification' in window && Notification.permission === 'granted') {
//       setNotificationPermission(true);
//     }
//   }, []);

//   const handleNotifyMe = () => {
//     if ('Notification' in window) {
//       Notification.requestPermission().then((permission) => {
//         if (permission === 'granted') {
//           setNotificationPermission(true);
//         }
//       });
//     }
//   };

//   const handleMaintenanceEnd = () => {
//     setMaintenanceMode(false);
//     // Lógica para notificar o usuário quando a manutenção acabar
//     if (notificationPermission) {
//       new Notification('A página está de volta!', {
//         body: 'A manutenção terminou e a página está disponível novamente.',
//       });
//     }
//   };

//   return (
//     <div>
//       {maintenanceMode ? (
//         <div>
//           <p>A página está em manutenção. Volte em breve!</p>
//           <button onClick={handleNotifyMe}>Notificar quando a página voltar</button>
//         </div>
//       ) : (
//         <div>
//           <p>A página está de volta!</p>
//           {/* Conteúdo da página após a manutenção */}
//         </div>
//       )}
//       {maintenanceMode && !notificationPermission && (
//         <p>Você pode receber uma notificação quando a página voltar.</p>
//       )}
//     </div>
//   );

export default App;
