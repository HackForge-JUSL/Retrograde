import { MetaMaskProvider } from '@metamask/sdk-react';

export default function Metamask() {
  return (
    <MetaMaskProvider
      sdkOptions={{
        modals: {
          install: ({ link }) => {
            let modalContainer = null;

            return {
              mount: () => {
                modalContainer = document.createElement("div");
                document.body.appendChild(modalContainer);

                ReactDOM.render(
                  <CustomModal
                    onClose={() => {
                      ReactDOM.unmountComponentAtNode(modalContainer);
                      modalContainer.remove();
                    }}
                  />,
                  modalContainer
                );
              },
              unmount: () => {
                if (modalContainer) {
                  ReactDOM.unmountComponentAtNode(modalContainer);
                  modalContainer.remove();
                }
              },
            };
          },
        },
      }}
    >
    </MetaMaskProvider>
  );
}
