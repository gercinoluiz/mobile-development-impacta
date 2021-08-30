declare module "*.svg"
declare module "*.png"


interface ProductsProps {

    id: string;
    name?: string;
    price?: string;
    amount?: string;
    factory?: {
        id: string;
        name: string;
    }

}

interface UserProps {

    id: string;
    name?: string;
    address?: string;
    userPassword?: string;
    age?: string;


}

interface ISiginInfo {

    signed: boolean;
    token?: string;
    handleSignIn(name:string, password:string): void;
    handleSignOut(): void;
    setCurrentUser(name:string):void;
    user:string

}
