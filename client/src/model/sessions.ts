import { reactive } from "vue";
import { useRouter } from "vue-router";


const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
        type: "success" | "error"| "warning"| "info",
        }[],
})

interface User {
    id?: number;
    name: string;
    email?: string;
    photo?: string;
    token?: string;
}

export function useSession() {
    return session;
}

export function login() {
    session.user = {
        name: "Michelle Zhunio",
    }
}

export function useLogout() {
    const router = useRouter();
    
    return function() {
        console.log(router);
        session.user = null;

        router.push("/login");
    }
}
export function api(url: string) {
    session.isLoading = true;
    return myFetch.api(url)
        .catch(err => {
            console.error(err);
            session.messages.push({
                msg: err.message ?? JSON.stringify(err),
                type: "error",
            })
        })
        .finally(() => {
            session.isLoading = false;
        })
}