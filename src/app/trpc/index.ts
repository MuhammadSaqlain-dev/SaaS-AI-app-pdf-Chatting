import { z } from 'zod';
import { publicProcedure, router } from './trpc';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { TRPCError } from '@trpc/server';

export const appRouter = router({
    authCallback: publicProcedure.query(async () => {
        const {getUser} = getKindeServerSession()
        const user  =  await getUser();

        if (!user?.id || !user.email) throw new TRPCError({code: 'UNAUTHORIZED'})

        // check if the user exists in the database ==> 2:03

    })
});

// export type definition of API
export type AppRouter = typeof appRouter;