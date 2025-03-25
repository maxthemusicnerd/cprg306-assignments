
"use client"

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 



export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();


    const login = async () => {
        await gitHubSignIn();
    };

    const logout = async () => {
        await firebaseSignOut();
    }

    return(
        <div>
            <div>
                {user ? (
                    <div>
                        <h1>Hello, {user.displayName}</h1>
                        <button onClick={logout} className="m-10 p-5 rounded-xl bg-red-400">Logout</button>
                    </div>
                ) : (
                    <div>
                        <h1 className="ml-10 mt-10">Log in?</h1>
                        <button onClick={login} className="m-10 p-5 rounded-xl bg-blue-400">Log in!</button>
                    </div>
                )}
            </div>
        </div>
    );
}



