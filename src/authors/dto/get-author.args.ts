//import { MinLength } from 'class-validator';
import { Field, Int, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetAuthorArgs {

    @Field(type => Int)
    id?: number;

    //@Field({ nullable: true })
    //@MinLength(3)
    //firstName: string;
}