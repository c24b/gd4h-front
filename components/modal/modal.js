import { useState } from 'react';
import { Button, Modal, ModalTitle, ModalContent, ModalFooter, ModalClose } from '@dataesr/react-dsfr';
const [isOpen, setIsOpen] = useState(false);


const MyModal(){this} => {
    return (
<>
  <Button title="open modal" onClick={() => setIsOpen(true)}>open modal</Button>
  <Modal isOpen={isOpen} hide={() => setIsOpen(false)} canClose={false}>
    <ModalTitle icon="ri-arrow-right-fill">Modal d'action</ModalTitle>
    <ModalContent>Pour fermer la modal, l'utilisateur doit cliquer sur le bouton.</ModalContent>
    <ModalFooter>
      <Button title="title" onClick={() => setIsOpen(false)}>Modal Button</Button>
    </ModalFooter>
  </Modal>
</>
    )
export default MyModal;